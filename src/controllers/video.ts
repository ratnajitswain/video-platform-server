import { Request, Response } from 'express';
import { P } from 'global';
import fs from 'fs';
import videoConversion from '../utils/common';
videoConversion()
class VideoController {
    static async streamVideo(req: Request, res: Response): P {
        try {
            const videoId = req.params.id
            const videoPath = `./static/videos/${videoId}.mp4`;

            if (fs.existsSync(videoPath)) {
                const stat = fs.statSync(videoPath);
                const fileSize = stat.size;
                const range = req.headers.range;
                if (range) {
                    const CHUNK_SIZE = 10 ** 6
                    const parts = range.replace(/bytes=/, "").split("-");
                    const start = parseInt(parts[0], 10);
                    const end = Math.min(start + CHUNK_SIZE, fileSize - 1)
                    const file = fs.createReadStream(videoPath, { start, end });
                    const headers = {
                        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                        'Accept-Ranges': 'bytes',
                        'Content-Length': end - start + 1,
                        'Content-Type': 'application/octet-stream',
                        'Access-Control-Allow-Origin': "*"
                    }
                    res.writeHead(206, headers);
                    file.pipe(res);
                } else {
                    const headers = {
                        'Content-Length': fileSize,
                        'Content-Type': 'video/mp4',
                    };
                    res.writeHead(200, headers);
                    fs.createReadStream(videoPath).pipe(res);
                }
            } else {
                res.status(404).send('Video not found');
            }
        } catch (error) {

        }
    }
    static async streamVideo2(req: Request, res: Response): P {
        try {
            const videoId = req.params.id
            const filename = req.params.filename;
            const filePath = './static/videos/index.m3u8';

            // Check if the requested file exists
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    // File not found
                    res.status(404).send('File not found');
                } else {
                    // Set the appropriate content type
                    // res.set('Content-Type', 'application/vnd.apple.mpegurl');

                    // Read the HLS file and stream it to the response
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        } catch (error) {

        }
    }
}

export default VideoController;