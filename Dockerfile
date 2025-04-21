FROM mcr.microsoft.com/playwright:focal

WORKDIR /app
COPY . .
RUN npm ci
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]
