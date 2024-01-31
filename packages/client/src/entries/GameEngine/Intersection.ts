// Проверка на пересечения

export function isRectCollide(obj1: any, obj2: any): boolean {
  if (
    obj1.position.x + obj1.width >= obj2.position.x &&
    obj1.position.x <= obj2.position.x + obj2.width &&
    obj1.position.y + obj1.height >= obj2.position.y &&
    obj1.position.y <= obj2.position.y + obj2.width
  ) {
    return true;
  }
  return false;
}