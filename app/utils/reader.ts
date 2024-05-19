import fs from 'fs'
import MsgReader from '@kenjiuno/msgreader'

export async function reader(fileName: string) {
    const msgFileBuffer = fs.readFileSync(`public/${fileName}`)
    const testMsg = new MsgReader(msgFileBuffer)
    const testMsgInfo = testMsg.getFileData()
    return testMsgInfo
}
