# this-is-me

## How to use

- Start Docker Container

```bash
docker compose up -d dev
```

- In Container: Start pnpm dev-server

```bash
pnpm run dev --open --host
```

and connet to `http://127.0.0.1:5173/`

- In Container: Start streamlit dev-server

```bash
streamlit run src/app.py
```

and connet to `http://127.0.0.1:8501/`
