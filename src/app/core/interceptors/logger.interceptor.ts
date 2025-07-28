import { HttpInterceptorFn } from "@angular/common/http";

export const loggerInterceptor: HttpInterceptorFn = (request, next) => {
  const reqInfo = {
    method: request.method.toLowerCase(),
    url: request.urlWithParams,
    headers: request.headers.keys().reduce(
      (acc, key) => {
        acc[key] = request.headers.get(key);
        return acc;
      },
      {} as Record<string, string | null>,
    ),
    body: request.body,
  };

  console.log("[debug]", reqInfo);

  return next(request);
};
