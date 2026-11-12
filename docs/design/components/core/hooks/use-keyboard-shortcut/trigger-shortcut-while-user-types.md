## Trigger shortcut while user types

The `shouldIgnoreTarget` callback runs against `event.target` before the combination is matched and skips the shortcut when it returns `true`. It defaults to `isValueEntryTarget`, which covers `<input>`, `<textarea>`, `<select>`, `role="textbox"`, and `contenteditable` elements. Pass `() => false` to match on any target.

**WhileTyping**

```tsx
import { useState } from 'react';

import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';
import { FormField, Label, TextArea } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const submitCommentKeys = 'mod+Enter';

const WhileTyping = () => {
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  useKeyboardShortcut({
    keys: submitCommentKeys,
    onTrigger: () => setSubmittedComment(comment),
    // highlight-next-line
    shouldIgnoreTarget: () => false,
  });

  return (
    <Flex flexDirection="column" alignItems="start">
      <FormField>
        <Label>Comment</Label>
        <TextArea value={comment} onChange={setComment} />
      </FormField>
      <Text>
        Press <KeyboardShortcut keys={submitCommentKeys} /> to submit.
      </Text>
      {submittedComment !== '' && <Text>Submitted: {submittedComment}</Text>}
    </Flex>
  );
};
```

Each check behind `isValueEntryTarget` is exported on its own, as follows: `isInputTarget`, `isTextareaTarget`, `isSelectTarget`, `isTextboxTarget`, and `isEditableTarget`.

**ComposedTargetChecks**

```tsx
import { useState } from 'react';

import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import {
  isEditableTarget,
  isInputTarget,
  isTextboxTarget,
  useKeyboardShortcut,
} from '@dynatrace/strato-components/core';
import {
  FormField,
  Label,
  TextArea,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const toggleTracesKeys = 'mod+Shift+l';

const ComposedTargetChecks = () => {
  const [showTraces, setShowTraces] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  useKeyboardShortcut({
    keys: toggleTracesKeys,
    onTrigger: () => setShowTraces((visible) => !visible),
    // highlight-start
    shouldIgnoreTarget: (target) =>
      isEditableTarget(target) ||
      isInputTarget(target) ||
      isTextboxTarget(target),
    // highlight-end
  });

  return (
    <Flex flexDirection="column" alignItems="start">
      <FormField>
        <Label>Comment</Label>
        <TextArea value={comment} onChange={setComment} />
      </FormField>
      <FormField>
        <Label>Name</Label>
        <TextInput value={name} onChange={setName} />
      </FormField>
      <Text>
        Press <KeyboardShortcut keys={toggleTracesKeys} />. The text area is
        left out of the check, so the shortcut triggers there but not from the
        text input.
      </Text>
      {showTraces && <Text>The traces are open.</Text>}
    </Flex>
  );
};
```
