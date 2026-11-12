## Scenarios

Below are common scenarios involving Dynatrace Intelligence that require AI presence to be shown in a consistent way. The Strato components and content patterns to use in each scenario are described below, along with do and don’t content examples.

### AI triggers

AI triggers prompt Dynatrace Intelligence to perform a pre-defined task, such as explain logs or problems, or write a valid DQL query from a natural language prompt. These "conversation starters" open Assist, the Dynatrace AI chat, and run the specified intent. The user can ask follow-up questions or refine the conversation with further details.

#### Strato components

- [Button](https://developer.dynatrace.com/design/components/buttons/Button.md)
- [Menu.Item](https://developer.dynatrace.com/design/components/navigation/Menu.md)
- [AiIcon](https://developer.dynatrace.com/design/icons/functional-icons.md)

#### Content patterns

The content pattern varies slightly depending on where the trigger is located and what appears beside it.

- Triggers in the app interface must have the `AiIcon` in the prefix.
- Triggers in Assist don't have the `AiIcon`.
- Make triggers short but specific. Ideally, 1-3 words.

**If trigger is in app interface**: `AiIcon` + [Imperative verb capitalized] + \[object in lowercase, unless it's a brand name]

![AI trigger in app](https://developer.dynatrace.com/assets/images/ai-presence-conversation-starter-in-app-light-42b7e0149c3287679b9d358b2e49dcde.webp)

| Do                                | Don't                         |
| --------------------------------- | ----------------------------- |
| `AiIcon` Explain problem          | `AiModelIcon` Explain problem |
| `AiIcon` Summarize execution plan | Explaining problem            |
| `AiIcon` Write DQL                | Troubleshoot `AiIcon`         |

**If trigger is in Assist and preceded by an imperative verb, such as "Understand", "Configure", "Analyze"**: \[Object in sentence case]

![AI trigger in chat](https://developer.dynatrace.com/assets/images/ai-presence-conversation-starter-in-chat-light-5fe784756b24abe1b06cb52f9c3fc76c.webp)

| Do                 | Don't                                   |
| ------------------ | --------------------------------------- |
| SLOs               | How to create good SLOs                 |
| Workflows          | workflows                               |
| Maintenance window | Continuous maintenance schedule updates |

**If trigger is in Assist and preceded by "Get started"**: [Imperative verb capitalized] + \[object in lowercase, unless it's a brand name]

| Do                       | Don't           |
| ------------------------ | --------------- |
| Learn DQL basics         | DQL basics      |
| Summarize execution plan | Summarize       |
| Explain problem          | Explain Problem |

### AI feature

Any feature powered by AI, including AI-generated content, must be labeled accordingly.

#### Strato components

- [Chip](https://developer.dynatrace.com/design/components/content/Chip.md) - Make the chip interactive and include a tooltip, such as “AI-powered feature”.
- [AiIcon](https://developer.dynatrace.com/design/icons/functional-icons.md)

#### Content patterns

##### Default

`AiIcon` Intelligence

##### If space is too tight for default

`AiIcon`

![AI feature](./assets/ai-presence-feature-light.webp)

| Do                           | Don't                           |
| ---------------------------- | ------------------------------- |
| `AiIcon` Intelligence        | `AiIcon` Dynatrace Intelligence |
| `AiIcon` (if space is tight) | `AiIcon` AI-generated           |
|                              | by Dynatrace Intelligence       |

### AI loading state

The AI loading animation must appear whenever the AI is working on a response.

#### Strato components

- [AiLoadingIndicator](https://developer.dynatrace.com/design/components/content/AiLoadingIndicator.md)

#### Content patterns

**If there is an object**: [-ing verb capitalized] + [object in lowercase, unless it's a brand name]...

**If there isn't an object**: [-ing verb capitalized]...

- End with an ellipsis (...). **Don't** insert a space before the ellipsis.
- Don't write a whole sentence. Keep to a couple words.

![AI loading](./assets/ai-presence-loading-state-light.webp)

| **Do**            | **Don't**                                   |
| ----------------- | ------------------------------------------- |
| Running DQL...    | Still thinking...                           |
| Analyzing logs... | Reading everything in the knowledge base... |
| Thinking...       | Hold on a minute, I'm thinking...           |
| Analyzing...      | Dynatrace Intelligence is analyzing.        |

### Disclaimer

The AI disclaimer must appear wherever there is a generative AI response or output. It reminds users to verify the facts and logic of AI responses.

The disclaimer is added automatically to outputs in Assist. App creators must add the AI disclaimer if the AI output is in the app interface. Exception: The disclaimer may be omitted in small areas if an [AI feature](#ai-feature) `Chip` is used.

#### Strato components

- [Text](https://developer.dynatrace.com/design/components/typography/Text.md)
- [ExternalLink](https://developer.dynatrace.com/design/components/typography/ExternalLink.md)

#### Content pattern

Use this exact phrase: "Dynatrace Intelligence is an AI system. Verify before acting on important information."

- Use the `ExternalLink` component to link the words "Dynatrace Intelligence" to the Dynatrace Intelligence overview page in Dynatrace Documentation.

![AI disclaimer](https://developer.dynatrace.com/assets/images/ai-presence-disclaimer-light-067a6bac99634b688134148c21c5d700.webp)
