docker build -t weatherreport . && docker run -it -d --device=/dev/ttyACM0 --env-file secret.env weatherreport
