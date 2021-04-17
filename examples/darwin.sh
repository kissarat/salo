#!/bin/env bash

nvm install lts
curl https://install.meteor.com/ | sh
brew install nvm
~/.profile <<EOF
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
EOF
. ~/.profile
brew tap mongodb/brew
# elasticsearch
brew install openjdk\@11 mongodb-community\@3.6 mysql\@5.6 rabbitmq
brew install mongodb-compass gimp iterm2 telegram google-chrome libreoffice teamviewer visual-studio-code pwgen cloc
grep -e '^\w\+=' .env
