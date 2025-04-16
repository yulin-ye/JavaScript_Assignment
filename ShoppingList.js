let shoppingList = ["牛奶", "鸡蛋", "面包"]

shoppingList.push("西红柿")
shoppingList.push("萝卜")

console.log(shoppingList)

shoppingList.pop()
console.log(shoppingList)

function showShoppingList() {
  if (shoppingList.length > 5) {
    console.log('你的购物车满了')
  }

  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`)
  })
}

showShoppingList(shoppingList)

const itemObjArr = [
  {
    name: "牛奶",
    price: 12,
    quantity: 1
  },
  {
    name: "鸡蛋",
    price: 8,
    quantity: 10
  },
  {
    name: "酸奶",
    price: 5,
    quantity: 3
  },
  {
    name: "苹果",
    price: 7,
    quantity: 15
  }
]

function findItem(itemName) {
  for(let i = 0; i < itemObjArr.length; i++) {
    if(itemObjArr[i].name === itemName) {
      return true;
    }
  }
  return false;
}
var res = prompt('请输入物品名称')
console.log(`物品${findItem(res) ? '在购物清单中' : '不在购物清单中'}`)