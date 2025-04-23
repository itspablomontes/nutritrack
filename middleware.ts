import { type NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];
const alwaysPublicRoutes = ["/"];

export default function middleware(req: NextRequest): NextResponse {
  try {
    const path = req.nextUrl.pathname;
    const accessToken = req.cookies.get("access_token")?.value;
    const isAuthenticated = accessToken && accessToken.trim() !== "";

    if (alwaysPublicRoutes.includes(path)) {
      return NextResponse.next();
    }

    if (publicRoutes.includes(path) && isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    const isProtected = protectedRoutes.some((route) => path.startsWith(route));
    if (isProtected && !isAuthenticated) {
      const loginURL = new URL("/login", req.url);
      loginURL.searchParams.set("from", encodeURIComponent(path));
      return NextResponse.redirect(loginURL);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/signup", "/dashboard/:path*"],
};
