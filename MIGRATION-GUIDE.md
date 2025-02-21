# Migration path from SwissRETS XML to JSON standard

Adopters of the SwissRETS XML will need to adjust to certain breaking changes in order to migrate to the JSON standard, which are documented here.

* Removal of `/properties/property/utilizations` – The specification of a property is now handled exclusively via `/properties/property/categories`. The `utilizations` array was removed as it introduced additional complexity (e.g., validating combinations of `utilizations` and `categories` values) without delivering significant benefits.

* Removal of `/properties/property/seller/inquiryPerson` and `/projects/project/seller/inquiryPerson` – The `inquiryPerson` field was removed as it added unnecessary complexity without providing significant benefits. Instead, the dedicated email address for receiving inquiries and applications is now specified via the `/properties/property/seller/inquiryEmail` and `/projects/project/seller/inquiryEmail` properties.
