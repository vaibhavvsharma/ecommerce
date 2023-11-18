import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sktb9IKLSPM5sfwqSGS76MAJsvlyWCpeaCjVmeeUi78V28WdqWHtHqKjXgn4ApDTycboHd0JsTlN5499DX7AwzlAanpdzo6I3nKdLnIH2vgw9QLEnEogGqc6rSYBUYWOitmpUue6iqWxVMS18rxa3k7ZZZfvD44VtFDZASYYTX7UXDSYXC1R",
})
