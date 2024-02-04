// Проверка на пересечения

export function isRectCollide(obj1: any, obj2: any): boolean {
  if (
    obj1.x + obj1.width >= obj2.x &&
    obj1.x <= obj2.x + obj2.width &&
    obj1.y + obj1.height >= obj2.y &&
    obj1.y <= obj2.y + obj2.width
  ) {
    // if (
    //   obj1.x < obj2.x + obj2.width &&
    //   obj1.x + obj1.width > obj2.x &&
    //   obj1.y < obj2.y + obj2.height &&
    //   obj1.y + obj1.height > obj2.y
    // ) {
    return true;
  }
  return false;
}
