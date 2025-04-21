import { type NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default function middleware(req: NextRequest): NextResponse {
  try {
    const path = req.nextUrl.pathname;

    // Skip middleware for public routes
    if (publicRoutes.includes(path)) {
      return NextResponse.next();
    }

    // Check if the route is protected (including dynamic subroutes)
    const isProtected = protectedRoutes.some((route) => path.startsWith(route));
    if (!isProtected) {
      return NextResponse.next();
    }

    // Check for access token
    const accessToken = req.cookies.get("access_token")?.value;
    if (!accessToken || accessToken.trim() === "") {
      console.log("not found nigga");
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
  matcher: ["/dashboard/:path*"], // Only apply to dashboard routes
};
