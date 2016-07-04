#!/bin/bash

TARGET=beta.hotmonsters.org
if [ $# -gt 0 ]; then
  TARGET=$1
fi

msg="deploying to $TARGET"
msglen=$(printf "%s" "$msg"|wc -c)

echo $msg
printf '=%.0s' $(seq $msglen)
echo


SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  # if $SOURCE was a relative symlink, we need to resolve it relative to the
  # path where the symlink file was located
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

scp -r $DIR/dist/* $DIR/dist/.htaccess $TARGET:

printf '=%.0s' $(seq $msglen)
echo
echo "done!"
