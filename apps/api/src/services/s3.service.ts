import { ERROR_CODES } from '@/enums'
import { ErrorResponse } from '@/utils'
import { S3 } from 'aws-sdk'
import { Body } from 'aws-sdk/clients/s3'

class S3Service {
  private s3Client: S3
  constructor() {
    this.s3Client = new S3()
  }

  async add(
    filename: string,
    body: Body,
    options?: { contentType: S3.Types.PutObjectRequest['ContentType'] }
  ): Promise<string> {
    try {
      const params = {
        Bucket: process.env.BUCKET_NAME_USERS,
        Key: filename,
        Body: body,
        ACL: 'public-read'
      } as S3.Types.PutObjectRequest

      if (options?.contentType) {
        params.ContentType = options.contentType
      }

      await this.s3Client.putObject(params).promise()

      return this.getUrl(filename)
    } catch (error) {
      this.handleError(error)
    }
  }

  private getUrl(filename: string) {
    return `https://${process.env.BUCKET_NAME_USERS}.s3.amazonaws.com/${filename}`
  }

  private handleError(error: unknown | Error): void {
    throw new ErrorResponse({
      data: error,
      message: error instanceof Error ? error?.message : null,
      code: ERROR_CODES.USE_ERROR_S3
    })
  }
}

export const s3Service = new S3Service()
