In order to have all the providers in place for rendering overlays, applying global styles or internationalization, you need to wrap your app in the `AppRoot`. If you're using the `dt-app` to create your app, this is automatically taken care of and you can start working on your app without further ado.

**`AppRootProps`**

```ts
export declare type AppRootProps = PropsWithChildren<DataTestId & StylingProps & MaskingProps> & {
    /**
     * The path to the folder of translations. Needs to always end with a `/` value and contain language files like en.json + ja.json.
     * The default path depends on your host domain and looks something like 'https://example.com/ui/lang/'.
     */
    translationRootPath?: string;
};
```
