import { isServer, PORT } from '../constants/env';

const envAwareFetch = async <R>(
    url: string,
    options?: Record<string, unknown>,
) => {
    const fetchUrl =
        isServer && url.startsWith('/')
            ? `http://localhost:${PORT}${url}`
            : url;

    const result = await fetch(fetchUrl, options);
    const data = await result.json();
    return data as R;
};

export { envAwareFetch as fetch };
