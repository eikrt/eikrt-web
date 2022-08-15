FROM registry.semaphoreci.com/golang:1.18 as builder

ENV APP_HOME /home/eino/eikrt-web/backend

WORKDIR "$APP_HOME"
COPY src/ .
RUN go mod download
RUN go mod verify
RUN go build -o app

FROM registry.semaphoreci.com/golang:1.18

ENV APP_HOME /home/eino/eikrt-web/backend
RUN mkdir -p "$APP_HOME"
WORKDIR "$APP_HOME/app"

COPY --from=builder "$APP_HOME"/app $APP_HOME/app/app

EXPOSE 8080
COPY blogposts/ blogposts/
CMD ["./app/app"]
