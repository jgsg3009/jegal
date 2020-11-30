import time
from inno.rpa import Script

script = Script()
# 서버에서 RPA IDE의 버전을 조회.
ide_version = script.get_ide_version()

# 스크립트 실행시간 추적 시작.
start_time = time.time()

################### 업무 코드 작성 시작 ###################

from xml.etree.ElementTree import Element, SubElement, ElementTree
from inno.rpa import ExcelAutomation
from javax.swing import JOptionPane

filename = 'test_rpa'
try :
    excel = ExcelAutomation(visible=True)
    excel.open(("C:\\Users\\jegal\\Downloads\\표준항목 엑셀 파일\\표준항목정의서(설계)_상품.xls").decode("utf-8"))   
    aliases = excel.getValue(("D4","D8"))
    names = excel.getValue(("E4","E8"))
    descriptions = excel.getValue(("H4","H8"))
    types = excel.getValue(("I4","I8"))
    refs = excel.getValue(("M4","M8"))
finally :
    excel.close()

nameInfo = ["version","DEFAULT-DATE-PATTERN","ENCRYPTPASSWORD","LASTUPDATETIME","ROLEUPDATETIME",
            "SYSTEM","SYSTEM.LEVEL","SYSTEM.NAME","TABLEVERSION","TABLEVERSION.RELEASE","TIMESTAMP"]

textInfo = ["7.2","yyyy-MM-dd","DES","20200824 084334 703 5","2020-08-23","DEV","1","개발계".decode('utf-8'),"7.1.0.0","20191210.001",
            "20200824 084334 705 4"]
index = 0
root = Element('repository')

xml_properties = SubElement(root, 'xml-properties')
SubElement(xml_properties, 'property',{'name' : nameInfo[index]}).text = textInfo[index] 
index += 1

properties = SubElement(root, 'properties')
while index < len(nameInfo) :
    SubElement(properties, 'property',{'name' : nameInfo[index]}).text = textInfo[index] 
    index += 1

items = SubElement(root, 'items')

itemIndex = 0
while itemIndex < len(aliases) :
   if types[itemIndex][0] == "문자".decode('utf-8'):
       types[itemIndex][0] = "2"
   else :
       types[itemIndex][0] = "1"
   item = SubElement(items,'item',{'gubun': 'N', 'code-size': '0', 'dbuse-yn': "N", 'range-yn': 'N', 'type': types[itemIndex][0],
               'alias': aliases[itemIndex][0], 'name': names[itemIndex][0],'id': '#S'+str(itemIndex+1).rjust(8,'0')})
   SubElement(item,'detail').text = descriptions[itemIndex][0]
   itemIndex += 1
 
tree = ElementTree(root)
tree.write('C:\\Users\\jegal\\Downloads\\' + filename +'.xml', encoding = "UTF-8",xml_declaration=True)

click("1598403265659.png")

wait(1)

paste("IRBuilder")

wait(1)

type(Key.ENTER)

wait("1598403367845.png",10)

passwordType = find("1598403410974.png")
click(Location(passwordType.x+50,passwordType.y))

paste("admin")

click("1598403486262.png")

wait("1598403531746.png",10)

wait(3)

click("1598403577426.png")

click("1598403617308.png")

click("1598403651910.png")

click("1598403773953.png")

click("1598403822927.png")
        
click("1598403843532.png")

click("1598403854959.png")

if exists("1598488607213.png") :
    click("1598404013884.png")
    click("1598403854959.png")

click("1598404049991.png")

click("1598404219055.png")

click("1598404318940.png")

result = JOptionPane.showConfirmDialog(None,"계속 할 것입니까?".decode('utf-8'),"Confirm",JOptionPane.YES_NO_OPTION)

click("1598409674238.png")

if result == JOptionPane.CLOSED_OPTION :
  pass
elif result == JOptionPane.YES_OPTION :
  filename = 'test_rpa'

  click("1598364226634.png")
  wait(1)

  index = 0
  img = find("1598364277557.png")
  item_name = find("1598364544701.png")
  while index < len(names) :  
    if refs[index][0] == "" :
        index += 1
        continue
    click(Location(img.x-20,img.y))
    wait(1)
    paste(names[index][0])
    wait(1)
    doubleClick(img)
    click(Location(item_name.x+20,item_name.y+24))
    click("1598365980614.png")

    value = refs[index][0]
    value_splited = value.split("\n")
    add_row_img = wait("1598501932266.png")

    for tempIndex,value in enumerate(value_splited) :
        doubleClick(Location(add_row_img.x,add_row_img.y+20+24*(tempIndex+1)))
        paste(value.split('.')[0])
        ref_name_img = find("1598368633764.png")
        click(Location(ref_name_img.x,ref_name_img.y+24*(tempIndex+1)))
        paste(value.split('.')[1])
        if tempIndex < len(value_splited) - 1:
            click(add_row_img)

    click("1598369650084.png")
    click("1598394901490.png")
    click("1598394981353.png")
    index += 1

################### 업무 코드 작성 끝 ################### 

# 스크립트 실행시간 출력.
script.print_elapsed_time(start_time)