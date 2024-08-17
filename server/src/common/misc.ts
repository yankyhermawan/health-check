import ResponseInterface from './response.interface'
import { Response } from 'express'

export async function formatAndSendResponse(res: Response, callBack: () => Promise<ResponseInterface>) {
    try {
        const response = await callBack()
        res.status(response.status).json(response.response)
    } catch (err) {
        res.status(500).json({ "erorr": "Internal Service Error" })
    }
}