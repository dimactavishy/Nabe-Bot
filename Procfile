exec : ffmpeg -y -i "%%i" -vf scale=144:-2,setsar=1:1 -c:v libx264 -c:a copy "%%~ni_shrink.mp4"
worker: node nabe.js
