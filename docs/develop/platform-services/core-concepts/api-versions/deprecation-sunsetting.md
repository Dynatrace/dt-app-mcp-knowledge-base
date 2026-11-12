## Deprecation & sunsetting

Eventually, a platform service version will reach its end of life and Dynatrace decides to remove it.

All Dynatrace APIs about to be removed go through two phases - **Deprecation** and **Sunsetting**.

- **Deprecation** means that the service version is no longer recommended for use, even though it's still fully operational.
- **Sunsetting** means that the service version will be shut down, meaning that at the announced time, the service version will no longer be available.

> **Note**
>
> Services marked as deprecated, or sunset are still fully functional and supported by Dynatrace.

### Deprecation

A deprecated service has all operations marked with the [**deprecated** field](https://swagger.io/specification/) in the Swagger UI documentation of the service.
All REST responses of a deprecated service contain the [**deprecation** header](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-deprecation-header-02) with the value 'true'.

### Sunsetting

A sunset service contains the sunset date in the Swagger UI documentation of the service.
All REST responses of a sunset service contain a [**sunset** header](https://www.rfc-editor.org/rfc/rfc8594.html) with the [sunset date](https://www.rfc-editor.org/rfc/rfc7231#section-7.1.1.1).
