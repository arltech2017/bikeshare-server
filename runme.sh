#!/usr/bin/env bash

python3 -m http.server 7000
firefox  http://localhost:7000/authSample.html
