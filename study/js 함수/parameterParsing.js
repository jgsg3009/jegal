const parameterParsing = function(codeLine) {
        const parameterParsing = function(codeLine) {
            const patterns = [
                /click\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /exists\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /find\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /type\(\s?\[?\s?(".+")\s?\]?.*".*".*\)/gm,
                /hover\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /wait\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /waitVanish\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /onAppear\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /onVanish\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /findAll\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /findBest\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /findBestList\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /findAny\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /findAnyList\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /doubleClick\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /rightClick\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /dragDrop\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /drag\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /dropAt\(\s?\[?\s?(".+")\s?\]?\s?.*\)/gm,
                /paste\(\s?\[?\s?(".+")\s?\]?.*".*".*\)/gm
            ];
            const patternsForpng = [
                /click\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /exists\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /find\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /type\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /hover\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /wait\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /waitVanish\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /onAppear\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /onVanish\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /findAll\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /findBest\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /findBestList\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /findAny\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /findAnyList\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /doubleClick\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /rightClick\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /dragDrop\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /drag\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /dropAt\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
                /paste\([^"]*.*("[0-9]*.*\.png\\?").*\)/gm,
            ];
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
        const parameterPngParsing = function(codeLine) {
                for (var index in patternsForpng) {
                    result = patternsForpng[index].exec(codeLine);
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
            // console.log(parameterParsing(
            //     "paste( [ \"1.png\",\"542.png\" ] ,\"나는 텍스트다\",15)"))
            // console.log(parameterParsing(
            //     "click(  \"1.png\" )"))
            // type, paste 는 텍스트가 들어감. 예외처리 필요
            // regular Expression의 작성 패턴은 다음 2가지.
            // 1.find 와 같이 PatternString만 있는경우 
            // 2. wait 와 같이 PatternString 만 있지 않거나 PatternString을 넣는것이 옵션인 경우

        // const codeLine1 = "find([\"12345.png\",\"54321.png\",\"54321.png\"])";
        // result = patterns[0].exec(codeLine1)
        // console.log(result)
        // result = result[1]
        // console.log(result)
        // result = result.replace(/"/g, '')
        // console.log(result)
        // result = result.split(',')
        // console.log(result)