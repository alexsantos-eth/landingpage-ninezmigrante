FROM node:14

WORKDIR /usr/src/observatorio-landing

COPY ./ ./

ENV VITE_APP_GOOGLE_RECAPTCHA_KEY=6Ld_LJcgAAAAAOILele8n-ocGc738mu0APQDJJp8
ENV VITE_APP_API_URL=/api/v1
ENV VITE_APP_BASENAME=/
ENV PUBLIC_URL=/

RUN npm install
RUN npm install -g serve

RUN npm run build

EXPOSE 3001

CMD ["serve", "-l", "3001", "-s", "dist"] 