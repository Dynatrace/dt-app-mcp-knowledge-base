### VisuallyCompleteOptionsDto

Visually Complete Options of a Browser Monitor.

| Name               | Type           | Description                                                                                                                                                                                                     |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| excludedElements   | Array\<string> | Query CSS selectors to specify mutation nodes (elements that change) to ignore in Visually complete and Speed index calculation.                                                                                |
| excludedUrls       | Array\<string> | Use regular expressions to define URLs for images and iFrames to exclude from detection by the Visually complete module.                                                                                        |
| imageSizeThreshold | number         | Use this setting to define the minimum visible area per element (in pixels) for an element to be counted towards Visually complete and Speed index. If not defined in request, it will be set to 50 by default. |
| inactivityTimeout  | number         | The time the Visually complete module waits for inactivity and no further mutations on the page after the load action. If not defined in request, it will be set to 1000 by default.                            |
| mutationTimeout    | number         | The time the Visually complete module waits after an XHR or custom action closes to start the calculation. If not defined in request, it will be set to 50 by default.                                          |
