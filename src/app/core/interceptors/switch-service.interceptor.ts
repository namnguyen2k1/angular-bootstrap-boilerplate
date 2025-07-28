import { HttpInterceptorFn } from "@angular/common/http";
import { API_SERVICE } from "@core/constants";
import { environment } from "../../../environments/environment";

const SERVICE_MAP: Record<string, string> = {
  [API_SERVICE.POST]: environment.postService,
  [API_SERVICE.USER]: environment.userService,
};

export const switchServiceInterceptor: HttpInterceptorFn = (request, next) => {
  const matched = Object.entries(SERVICE_MAP).find(([prefix]) => {
    return request.url.startsWith(prefix);
  });

  if (!matched) return next(request);

  const [prefix, baseUrl] = matched;
  const url = baseUrl + request.url.slice(prefix.length);

  return next(request.clone({ url }));
};
