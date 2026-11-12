## Backward compatibility

Semantic versioning defines that the major version must only be changed when incompatible changes are applied to the API.

Therefore, any Dynatrace platform service API must support backward compatibility:

- `Major` version updates (x.\*.\*) represent a breaking change. Any major update results in a new service version being provided parallel to the existing version.
- `Minor` version updates (\*.x.\*) represent a backward compatible change in the API (for example., a new field is added to a response, or a new query parameter is introduced). Extensions of an existing API are generally not considered a breaking change.
- `Patch` version updates (\*.\*.x) represent any changes that don't affect the functionality or structure of the API (for example, additional examples or documentation in the API Spec file).

**Backward compatibility policy:** When we change the API by tagging the update `Minor` or `Patch`, the changes will be non-breaking. It includes:

- **Addition of optional request parameters:** API might include new optional properties to the requests. It means clients don't need to handle them. However, they can utilize them if needed.
- **Addition of response parameters:** API responses may include additional properties in the JSON body. You should design your clients to either process or ignore these properties while considering compatibility.
- **Enum constants in response:** We might add new constants to existing enums. You should handle these new constants in your clients in a way that maintains application stability.
