const patterns = [
    /click\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /exists\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /find\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /type\(\s?\[?\s?(".+")\s?\]?.*".*".*\)/gm,
    /hover\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /wait\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /waitVanish\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /onAppear\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /onVanish\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /findAll\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /findBest\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /findBestList\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /findAny\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /findAnyList\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /doubleClick\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /rightClick\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /dragDrop\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /drag\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /dropAt\(\s?\[?\s?(".+")\s?\]?.*\)/gm,
    /paste\(\s?\[?\s?(".+")\s?\]?.*".*".*\)/gm
];

const patternsForpng = [
    /click\([^0-9]*(\d+.*png.*")/gm,
    /exists\([^0-9]*(\d+.*png.*")/gm,
    /find\([^0-9]*(\d+.*png.*")/gm,
    /type\([^0-9]*(\d+.*png.*")/gm,
    /hover\([^0-9]*(\d+.*png.*")/gm,
    /wait\([^0-9]*(\d+.*png.*")/gm,
    /waitVanish\([^0-9]*(\d+.*png.*")/gm,
    /onAppear\([^0-9]*(\d+.*png.*")/gm,
    /onVanish\([^0-9]*(\d+.*png.*")/gm,
    /findAll\([^0-9]*(\d+.*png.*")/gm,
    /findBest\([^0-9]*(\d+.*png.*")/gm,
    /findBestList\([^0-9]*(\d+.*png.*")/gm,
    /findAny\([^0-9]*(\d+.*png.*")/gm,
    /findAnyList\([^0-9]*(\d+.*png.*")/gm,
    /doubleClick\([^0-9]*(\d+.*png.*")/gm,
    /rightClick\([^0-9]*(\d+.*png.*")/gm,
    /dragDrop\([^0-9]*(\d+.*png.*")/gm,
    /drag\([^0-9]*(\d+.*png.*")/gm,
    /dropAt\([^0-9]*(\d+.*png.*")/gm,
    /paste\([^0-9]*(\d+.*png.*")/gm,
];
/**
 * @param {String} codeLine
 * @returns Array(String)
 * @example1 "click(\"123.png\")" => ["123.png"]
 * @example2 "click(\"Pattern(\"1579164524374.png\").targetOffset(21,1)\")"  => ["Pattern(1579164524374.png).targetOffset(21,1)"]
 * @example3 "click(\"Pattern(\"1579164524374.png\").similar(0.77)\")" => ["Pattern(1579164524374.png).similar(0.77)"]
 * @example4 "click(\"Pattern(\"1579164524374.png\").targetOffset(21,1).similar(0.77)\")" => ["Pattern(1579164524374.png).targetOffset(21,1).similar(0.77)"]
 * @example5 "click([\"123.png\",\"1234.png\"])" => ["123.png", "1234.png"]
 * @example6 "type(\"나는 텍스트다 png나 패턴아니다\", 15)" => null
 * @example7 "type(\"12345.png\",\"나는 텍스트다 png나 패턴아니다\", 15)" => ["12345.png"]
 * @example2 "type([\"패턴1\",\"패턴2\"],\"입력할 문자\",딜레이)" => ["패턴1", "패턴2"]
 */
const parameterParsing = function(codeLine) {

        var result;
        for (var index in patterns) {
            result = patterns[index].exec(codeLine);
            if (result) {
                result = result[1];
                result = result.replace(/\//g, '')
                result = result.split("\",\"");
                result = result.map(x => x.replace(/ /g, '').replace(/"/g, ''));
                break;
            } else {
                continue;
            }
        }
        return result;
    }
    /**
     * @param {String} codeLine
     * @returns Array(String)
     * @example code
     */
const parameterPngParsing = function(codeLine) {

    var result;
    for (var index in patternsForpng) {
        console.log(patternsForpng[index])
        result = patternsForpng[index].exec(codeLine);
        console.log(result)
        if (result) {
            result = result[1];
            console.log(result)
            var pattern = '(\\d+\.png)|.'
            result = result.replace(new RegExp(pattern, 'gi'), function(c) {
                console.log(c.slice(-4))
                return c.slice(-4) == '.png' ? c + ',' : '';
            });
            result = result.split(',').slice(0, -1);
            break;
        } else {
            continue;
        }
    }
    return result;
}