import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import httpProxy from "express-http-proxy";

const app = express();

const selectProxyHost = (req: Request) => {
    if (req.path.startsWith("/properties")) {
        return "http://localhost:8001";
    }
    return "undefined"; // TODO: Add next proxy host
};

app.use((req: Request, res: Response, next: NextFunction) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});

app.listen(process.env.PORT, () =>
    console.log(`Server is running on PORT ${process.env.PORT}!`)
);
