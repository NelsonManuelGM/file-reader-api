
// const TRUSTED_HOST = [process.env.TRUSTED_HOST,]

export default function corsConfiguration(req, callback) {
    let origin

    if (process.env.TRUSTED_HOST === req.headers.origin) {
        origin = { origin: true }
    }
    else {
        origin = { origin: false }
    }

    callback(null, origin)
}