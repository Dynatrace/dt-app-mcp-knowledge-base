## Anonymization and pseudonymization

Anonymizing personal data is an irreversible process that makes identifying individuals within data sets impossible. **Anonymous data doesn't contain any PII and, therefore, falls outside the scope of data protection law**.

You need to decide whether to anonymize data and the anonymization technique on a case-by-case basis according to different contexts of use. By default, you should never consider a raw dataset anonymous. However, having implemented an appropriate anonymization process, a developer can collaborate with third parties, and you can keep the data indefinitely.

Whereas **pseudonymization** data relating to an individual can no longer be attributed without more information, for example, to pseudonymize PII, you replace personal identifiers with random numbers or codes in a dataset. Unlike anonymization, pseudonymization can be a **reversible process**.

Despite reducing risks, differently from anonymized data, **pseudonymized data is considered PII and therefore is subject to data protection law!**

To better understand the difference between anonymization and pseudonymization, consider these examples:

- **Anonymization**
  - Data Masking (+ data deletion)
  - Randomization
  - Aggregation (+ identifiers deletion)
  - Generalization (+ identifiers deletion)
- **Pseudonymization**
  - Data Masking (+ masked data is kept)
  - Encryption
  - Hashing (+ table is kept)
  - Tokenization
