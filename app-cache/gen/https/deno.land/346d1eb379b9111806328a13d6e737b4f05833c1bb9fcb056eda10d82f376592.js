import { templates } from "./containers.ts";
import { copyProps, XMLEscape } from "./utils.ts";
import EtaErr from "./err.ts";
/* END TYPES */ /**
 * Include a template based on its name (or filepath, if it's already been cached).
 *
 * Called like `include(templateNameOrPath, data)`
 */ function includeHelper(templateNameOrPath, data) {
  const template = this.templates.get(templateNameOrPath);
  if (!template) {
    throw EtaErr('Could not fetch template "' + templateNameOrPath + '"');
  }
  return template(data, this);
}
/** Eta's base (global) configuration */ const config = {
  async: false,
  autoEscape: true,
  autoTrim: [
    false,
    "nl"
  ],
  cache: false,
  e: XMLEscape,
  include: includeHelper,
  parse: {
    exec: "",
    interpolate: "=",
    raw: "~"
  },
  plugins: [],
  rmWhitespace: false,
  tags: [
    "<%",
    "%>"
  ],
  templates: templates,
  useWith: false,
  varName: "it"
};
/**
 * Takes one or two partial (not necessarily complete) configuration objects, merges them 1 layer deep into eta.config, and returns the result
 *
 * @param override Partial configuration object
 * @param baseConfig Partial configuration object to merge before `override`
 *
 * **Example**
 *
 * ```js
 * let customConfig = getConfig({tags: ['!#', '#!']})
 * ```
 */ function getConfig(override, baseConfig) {
  // TODO: run more tests on this
  const res = {}; // Linked
  copyProps(res, config); // Creates deep clone of eta.config, 1 layer deep
  if (baseConfig) {
    copyProps(res, baseConfig);
  }
  if (override) {
    copyProps(res, override);
  }
  return res;
}
/** Update Eta's base config */ function configure(options) {
  return copyProps(config, options);
}
export { config, configure, getConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3gvZXRhQHYyLjIuMC9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGVtcGxhdGVzIH0gZnJvbSBcIi4vY29udGFpbmVycy50c1wiO1xuaW1wb3J0IHsgY29weVByb3BzLCBYTUxFc2NhcGUgfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IEV0YUVyciBmcm9tIFwiLi9lcnIudHNcIjtcblxuLyogVFlQRVMgKi9cblxuaW1wb3J0IHR5cGUgeyBUZW1wbGF0ZUZ1bmN0aW9uIH0gZnJvbSBcIi4vY29tcGlsZS50c1wiO1xuaW1wb3J0IHR5cGUgeyBDYWNoZXIgfSBmcm9tIFwiLi9zdG9yYWdlLnRzXCI7XG5cbnR5cGUgdHJpbUNvbmZpZyA9IFwibmxcIiB8IFwic2x1cnBcIiB8IGZhbHNlO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV0YUNvbmZpZyB7XG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IFhNTC1lc2NhcGUgaW50ZXJwb2xhdGlvbnMuIERlZmF1bHQgdHJ1ZSAqL1xuICBhdXRvRXNjYXBlOiBib29sZWFuO1xuXG4gIC8qKiBDb25maWd1cmUgYXV0b21hdGljIHdoaXRlc3BhY2UgdHJpbW1pbmcuIERlZmF1bHQgYFtmYWxzZSwgJ25sJ11gICovXG4gIGF1dG9UcmltOiB0cmltQ29uZmlnIHwgW3RyaW1Db25maWcsIHRyaW1Db25maWddO1xuXG4gIC8qKiBDb21waWxlIHRvIGFzeW5jIGZ1bmN0aW9uICovXG4gIGFzeW5jOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBjYWNoZSB0ZW1wbGF0ZXMgaWYgYG5hbWVgIG9yIGBmaWxlbmFtZWAgaXMgcGFzc2VkICovXG4gIGNhY2hlOiBib29sZWFuO1xuXG4gIC8qKiBYTUwtZXNjYXBpbmcgZnVuY3Rpb24gKi9cbiAgZTogKHN0cjogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgLyoqIFBhcnNpbmcgb3B0aW9ucy4gTk9URTogXCItXCIgYW5kIFwiX1wiIG1heSBub3QgYmUgdXNlZCwgc2luY2UgdGhleSBhcmUgcmVzZXJ2ZWQgZm9yIHdoaXRlc3BhY2UgdHJpbW1pbmcuICovXG4gIHBhcnNlOiB7XG4gICAgLyoqIFdoaWNoIHByZWZpeCB0byB1c2UgZm9yIGV2YWx1YXRpb24uIERlZmF1bHQgYFwiXCJgICovXG4gICAgZXhlYzogc3RyaW5nO1xuXG4gICAgLyoqIFdoaWNoIHByZWZpeCB0byB1c2UgZm9yIGludGVycG9sYXRpb24uIERlZmF1bHQgYFwiPVwiYCAqL1xuICAgIGludGVycG9sYXRlOiBzdHJpbmc7XG5cbiAgICAvKiogV2hpY2ggcHJlZml4IHRvIHVzZSBmb3IgcmF3IGludGVycG9sYXRpb24uIERlZmF1bHQgYFwiflwiYCAqL1xuICAgIHJhdzogc3RyaW5nO1xuICB9O1xuXG4gIC8qKiBBcnJheSBvZiBwbHVnaW5zICovXG4gIHBsdWdpbnM6IEFycmF5PFxuICAgIHtcbiAgICAgIHByb2Nlc3NGblN0cmluZz86IEZ1bmN0aW9uO1xuICAgICAgcHJvY2Vzc0FTVD86IEZ1bmN0aW9uO1xuICAgICAgcHJvY2Vzc1RlbXBsYXRlPzogRnVuY3Rpb247XG4gICAgfVxuICA+O1xuXG4gIC8qKiBSZW1vdmUgYWxsIHNhZmUtdG8tcmVtb3ZlIHdoaXRlc3BhY2UgKi9cbiAgcm1XaGl0ZXNwYWNlOiBib29sZWFuO1xuXG4gIC8qKiBEZWxpbWl0ZXJzOiBieSBkZWZhdWx0IGBbJzwlJywgJyU+J11gICovXG4gIHRhZ3M6IFtzdHJpbmcsIHN0cmluZ107XG5cbiAgLyoqIEhvbGRzIHRlbXBsYXRlIGNhY2hlICovXG4gIHRlbXBsYXRlczogQ2FjaGVyPFRlbXBsYXRlRnVuY3Rpb24+O1xuXG4gIC8qKiBOYW1lIG9mIHRoZSBkYXRhIG9iamVjdC4gRGVmYXVsdCBgaXRgICovXG4gIHZhck5hbWU6IHN0cmluZztcblxuICAvKiogQWJzb2x1dGUgcGF0aCB0byB0ZW1wbGF0ZSBmaWxlICovXG4gIGZpbGVuYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBIb2xkcyBjYWNoZSBvZiByZXNvbHZlZCBmaWxlcGF0aHMuIFNldCB0byBgZmFsc2VgIHRvIGRpc2FibGUgKi9cbiAgZmlsZXBhdGhDYWNoZT86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBmYWxzZTtcblxuICAvKiogQSBmaWx0ZXIgZnVuY3Rpb24gYXBwbGllZCB0byBldmVyeSBpbnRlcnBvbGF0aW9uIG9yIHJhdyBpbnRlcnBvbGF0aW9uICovXG4gIGZpbHRlcj86IEZ1bmN0aW9uO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBpbmNsdWRlIHRlbXBsYXRlcyBieSBuYW1lICovXG4gIGluY2x1ZGU/OiBGdW5jdGlvbjtcblxuICAvKiogRnVuY3Rpb24gdG8gaW5jbHVkZSB0ZW1wbGF0ZXMgYnkgZmlsZXBhdGggKi9cbiAgaW5jbHVkZUZpbGU/OiBGdW5jdGlvbjtcblxuICAvKiogTmFtZSBvZiB0ZW1wbGF0ZSAqL1xuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBXaGVyZSBzaG91bGQgYWJzb2x1dGUgcGF0aHMgYmVnaW4/IERlZmF1bHQgJy8nICovXG4gIHJvb3Q/OiBzdHJpbmc7XG5cbiAgLyoqIE1ha2UgZGF0YSBhdmFpbGFibGUgb24gdGhlIGdsb2JhbCBvYmplY3QgaW5zdGVhZCBvZiB2YXJOYW1lICovXG4gIHVzZVdpdGg/OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBjYWNoZSB0ZW1wbGF0ZXMgaWYgYG5hbWVgIG9yIGBmaWxlbmFtZWAgaXMgcGFzc2VkOiBkdXBsaWNhdGUgb2YgYGNhY2hlYCAqL1xuICBcInZpZXcgY2FjaGVcIj86IGJvb2xlYW47XG5cbiAgLyoqIERpcmVjdG9yeSBvciBkaXJlY3RvcmllcyB0aGF0IGNvbnRhaW4gdGVtcGxhdGVzICovXG4gIHZpZXdzPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPjtcblxuICBbaW5kZXg6IHN0cmluZ106IGFueTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXRhQ29uZmlnV2l0aEZpbGVuYW1lIGV4dGVuZHMgRXRhQ29uZmlnIHtcbiAgZmlsZW5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUGFydGlhbENvbmZpZyA9IFBhcnRpYWw8RXRhQ29uZmlnPjtcbmV4cG9ydCB0eXBlIFBhcnRpYWxBc3luY0NvbmZpZyA9IFBhcnRpYWxDb25maWcgJiB7IGFzeW5jOiB0cnVlIH07XG5cbi8qIEVORCBUWVBFUyAqL1xuXG4vKipcbiAqIEluY2x1ZGUgYSB0ZW1wbGF0ZSBiYXNlZCBvbiBpdHMgbmFtZSAob3IgZmlsZXBhdGgsIGlmIGl0J3MgYWxyZWFkeSBiZWVuIGNhY2hlZCkuXG4gKlxuICogQ2FsbGVkIGxpa2UgYGluY2x1ZGUodGVtcGxhdGVOYW1lT3JQYXRoLCBkYXRhKWBcbiAqL1xuXG5mdW5jdGlvbiBpbmNsdWRlSGVscGVyKFxuICB0aGlzOiBFdGFDb25maWcsXG4gIHRlbXBsYXRlTmFtZU9yUGF0aDogc3RyaW5nLFxuICBkYXRhOiBvYmplY3QsXG4pOiBzdHJpbmcge1xuICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmdldCh0ZW1wbGF0ZU5hbWVPclBhdGgpO1xuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgRXRhRXJyKCdDb3VsZCBub3QgZmV0Y2ggdGVtcGxhdGUgXCInICsgdGVtcGxhdGVOYW1lT3JQYXRoICsgJ1wiJyk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlKGRhdGEsIHRoaXMpO1xufVxuXG4vKiogRXRhJ3MgYmFzZSAoZ2xvYmFsKSBjb25maWd1cmF0aW9uICovXG5jb25zdCBjb25maWc6IEV0YUNvbmZpZyA9IHtcbiAgYXN5bmM6IGZhbHNlLFxuICBhdXRvRXNjYXBlOiB0cnVlLFxuICBhdXRvVHJpbTogW2ZhbHNlLCBcIm5sXCJdLFxuICBjYWNoZTogZmFsc2UsXG4gIGU6IFhNTEVzY2FwZSxcbiAgaW5jbHVkZTogaW5jbHVkZUhlbHBlcixcbiAgcGFyc2U6IHtcbiAgICBleGVjOiBcIlwiLFxuICAgIGludGVycG9sYXRlOiBcIj1cIixcbiAgICByYXc6IFwiflwiLFxuICB9LFxuICBwbHVnaW5zOiBbXSxcbiAgcm1XaGl0ZXNwYWNlOiBmYWxzZSxcbiAgdGFnczogW1wiPCVcIiwgXCIlPlwiXSxcbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG4gIHVzZVdpdGg6IGZhbHNlLFxuICB2YXJOYW1lOiBcIml0XCIsXG59O1xuXG4vKipcbiAqIFRha2VzIG9uZSBvciB0d28gcGFydGlhbCAobm90IG5lY2Vzc2FyaWx5IGNvbXBsZXRlKSBjb25maWd1cmF0aW9uIG9iamVjdHMsIG1lcmdlcyB0aGVtIDEgbGF5ZXIgZGVlcCBpbnRvIGV0YS5jb25maWcsIGFuZCByZXR1cm5zIHRoZSByZXN1bHRcbiAqXG4gKiBAcGFyYW0gb3ZlcnJpZGUgUGFydGlhbCBjb25maWd1cmF0aW9uIG9iamVjdFxuICogQHBhcmFtIGJhc2VDb25maWcgUGFydGlhbCBjb25maWd1cmF0aW9uIG9iamVjdCB0byBtZXJnZSBiZWZvcmUgYG92ZXJyaWRlYFxuICpcbiAqICoqRXhhbXBsZSoqXG4gKlxuICogYGBganNcbiAqIGxldCBjdXN0b21Db25maWcgPSBnZXRDb25maWcoe3RhZ3M6IFsnISMnLCAnIyEnXX0pXG4gKiBgYGBcbiAqL1xuXG5mdW5jdGlvbiBnZXRDb25maWcob3ZlcnJpZGU6IFBhcnRpYWxDb25maWcsIGJhc2VDb25maWc/OiBFdGFDb25maWcpOiBFdGFDb25maWcge1xuICAvLyBUT0RPOiBydW4gbW9yZSB0ZXN0cyBvbiB0aGlzXG5cbiAgY29uc3QgcmVzOiBQYXJ0aWFsQ29uZmlnID0ge307IC8vIExpbmtlZFxuICBjb3B5UHJvcHMocmVzLCBjb25maWcpOyAvLyBDcmVhdGVzIGRlZXAgY2xvbmUgb2YgZXRhLmNvbmZpZywgMSBsYXllciBkZWVwXG5cbiAgaWYgKGJhc2VDb25maWcpIHtcbiAgICBjb3B5UHJvcHMocmVzLCBiYXNlQ29uZmlnKTtcbiAgfVxuXG4gIGlmIChvdmVycmlkZSkge1xuICAgIGNvcHlQcm9wcyhyZXMsIG92ZXJyaWRlKTtcbiAgfVxuXG4gIHJldHVybiByZXMgYXMgRXRhQ29uZmlnO1xufVxuXG4vKiogVXBkYXRlIEV0YSdzIGJhc2UgY29uZmlnICovXG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zOiBQYXJ0aWFsQ29uZmlnKTogUGFydGlhbDxFdGFDb25maWc+IHtcbiAgcmV0dXJuIGNvcHlQcm9wcyhjb25maWcsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyBjb25maWcsIGNvbmZpZ3VyZSwgZ2V0Q29uZmlnIH07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxTQUFTLFFBQVEsa0JBQWtCO0FBQzVDLFNBQVMsU0FBUyxFQUFFLFNBQVMsUUFBUSxhQUFhO0FBQ2xELE9BQU8sWUFBWSxXQUFXO0FBa0c5QixhQUFhLEdBRWI7Ozs7Q0FJQyxHQUVELFNBQVMsY0FFUCxrQkFBMEIsRUFDMUIsSUFBWTtFQUVaLE1BQU0sV0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztFQUNwQyxJQUFJLENBQUMsVUFBVTtJQUNiLE1BQU0sT0FBTywrQkFBK0IscUJBQXFCO0VBQ25FO0VBQ0EsT0FBTyxTQUFTLE1BQU0sSUFBSTtBQUM1QjtBQUVBLHNDQUFzQyxHQUN0QyxNQUFNLFNBQW9CO0VBQ3hCLE9BQU87RUFDUCxZQUFZO0VBQ1osVUFBVTtJQUFDO0lBQU87R0FBSztFQUN2QixPQUFPO0VBQ1AsR0FBRztFQUNILFNBQVM7RUFDVCxPQUFPO0lBQ0wsTUFBTTtJQUNOLGFBQWE7SUFDYixLQUFLO0VBQ1A7RUFDQSxTQUFTLEVBQUU7RUFDWCxjQUFjO0VBQ2QsTUFBTTtJQUFDO0lBQU07R0FBSztFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7QUFDWDtBQUVBOzs7Ozs7Ozs7OztDQVdDLEdBRUQsU0FBUyxVQUFVLFFBQXVCLEVBQUUsVUFBc0I7RUFDaEUsK0JBQStCO0VBRS9CLE1BQU0sTUFBcUIsQ0FBQyxHQUFHLFNBQVM7RUFDeEMsVUFBVSxLQUFLLFNBQVMsaURBQWlEO0VBRXpFLElBQUksWUFBWTtJQUNkLFVBQVUsS0FBSztFQUNqQjtFQUVBLElBQUksVUFBVTtJQUNaLFVBQVUsS0FBSztFQUNqQjtFQUVBLE9BQU87QUFDVDtBQUVBLDZCQUE2QixHQUU3QixTQUFTLFVBQVUsT0FBc0I7RUFDdkMsT0FBTyxVQUFVLFFBQVE7QUFDM0I7QUFFQSxTQUFTLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxHQUFHIn0=