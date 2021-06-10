interface IJob {
    job_id: string
    job_description: string
    job_location: string
    job_full_time: string
}

type ApiDataType = {
    message: string
    status: string
    jobs: IJob[]
    job?: IJob
  }
  