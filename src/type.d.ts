interface IJob {
    _id: string
    description: string
    location: string
    full_time: string
}

type ApiDataType = {
    message: string
    status: string
    jobs: IJob[]
    job?: IJob
  }
  