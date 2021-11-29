FROM php:8.0.13-cli-alpine3.13

ARG WWWGROUP
RUN mkdir /phpIni
COPY files/bin/ /usr/local/bin/
COPY files/php/ /phpIni

RUN apk --no-cache upgrade && \
    apk --no-cache add bash git sudo openssh  libxml2-dev oniguruma-dev autoconf gcc g++ make npm freetype-dev libjpeg-turbo-dev libpng-dev libzip-dev

RUN apk add librdkafka librdkafka-dev \
        --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN apk add --no-cache pcre-dev $PHPIZE_DEPS 

RUN pecl channel-update pecl.php.net
RUN pecl install rdkafka pcov swoole ssh2 mongodb redis
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install mbstring xml iconv pcntl gd zip sockets bcmath soap 
RUN docker-php-ext-enable mbstring xml rdkafka gd iconv zip swoole pcov pcntl sockets bcmath soap mongodb redis

RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/ --allow-untrusted gnu-libiconv
ENV LD_PRELOAD /usr/lib/preloadable_libiconv.so php
COPY start-container /usr/local/bin/start-container

WORKDIR /var/www/html

RUN chmod +x /usr/local/bin/start-container

EXPOSE 8000
    
ENTRYPOINT ["start-container"]


