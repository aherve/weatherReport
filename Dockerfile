FROM armhf/ruby
RUN mkdir /app
WORKDIR /app

ADD Gemfile .
RUN bundle install
ADD src /app/src

CMD ["ruby", "src/test.rb"]
