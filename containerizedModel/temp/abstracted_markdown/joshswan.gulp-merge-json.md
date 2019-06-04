# gulp-merge-json

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A gulp plugin for deep-merging multiple JSON files into one file. Export as JSON or a node module.

## Usage

@abstr_code_section 

### Options

| Key | Type | Default | Description | | ---- | ---- | ------- | ----------- | | `fileName` | `String` | `combined.json` | Output filename | | `edit` | `Function` | `json => json` | Edit function (add/remove/edit keys during merge) | | `startObj` | `Object/Array` | `{}` | Starting object to merge into (useful for providing default values) | | `endObj` | `Object/Array` | | Object to merge after file merging complete (useful for overwriting with special values) | | `exportModule` | `Boolean/String` | `false` | Output `module.exports = {MERGED_JSON_DATA};` or `{exportModule} = {MERGED_JSON_DATA}` when string passed | | `concatArrays` | `Boolean` | `false` | Whether to concatenate arrays instead of merging | | `mergeArrays` | `Boolean` | `true` | Whether to merge arrays or overwrite completely | | `jsonReplacer` | `Function` | | Custom JSON replacer function passed to stringify | | `jsonSpace` | `String` | `\t` | String used for white space by stringify | | `json @abstr_number` | `Boolean` | `false` | Use JSON @abstr_number instead of JSON for parse and stringify |

## Examples

@abstr_code_section 

### Example Input

```JSON /* json/defaults.json */ { "key @abstr_number ": { "data @abstr_number ": "value @abstr_number ", "data @abstr_number ": "value @abstr_number " }, "key @abstr_number ": { "dataA": "valueA", "dataB": { "a": "b", "c": "d" } } }

/* json/development.json _/ { "key @abstr_number ": { "data @abstr_number ": "devValue" }, "key @abstr_number ": { "dataB": { "c": "DEV MODE!" } }, "key @abstr_number ": { "important": "value" } } @abstr_code_section JSON /_ dist/combined.json */ { "key @abstr_number ": { "data @abstr_number ": "devValue", "data @abstr_number ": "value @abstr_number " }, "key @abstr_number ": { "dataA": "valueA", "dataB": { "dataA": "valueA", "dataB": { "a": "b", "c": "DEV MODE!" } } }, "key @abstr_number ": { "important": "value" } } ```
