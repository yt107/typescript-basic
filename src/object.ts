const user: { readonly name: string; age?: number; email: string } = {
 name: '侍太郎',
 email: 'taro.samurai@example.com',
};

// user.age = 30; // This will cause a compile error because age is not readonly
console.log(user);