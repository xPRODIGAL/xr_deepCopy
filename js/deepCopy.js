// 深拷贝函数
function deepCopy(originValue, map = new Map()) {
  // 1.如果是原始类型, 直接返回
  if (!isObject(originValue)) {
    return originValue
  }

  if (map.get(originValue)) {
    return map.get(originValue)
  }

  // 2.如果是对象类型, 才需要创建对象
  const newObj = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObj)

  for (const key in originValue) {
    newObj[key] = deepCopy(originValue[key], map);
  }

  return newObj
}