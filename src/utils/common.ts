import {exec} from 'node:child_process';
import path from 'path';

const main = async () => {
   try{
        // exec(`${path.resolve('./ffmpeg/bin/ffmpeg.exe')} -i ./static/videos/video001.mp4 -c:v copy -c:a copy -hls_time 10 -hls_list_size 0 -bsf:v h264_mp4toannexb -f hls ./static/videos/index.m3u8`,(error)=>{
        //         if(error)
        //             console.log(error)
        // })
   }
 catch (error) {
        console.error('Error:', error);
    }
};

export default main