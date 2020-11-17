import { TestCase, TestModule, gondola } from "gondolajs";
import HomePage from "../pages/gondola_test_site/homePage";
import ProductPage from "../pages/gondola_test_site/productPage";
import CartPage from "../pages/gondola_test_site/cartPage";
import { Payment } from "../data/payment";
TestModule("WebDriver sample tests");
const firstProduct: string = "Khaki Suede Polish Work Boots";
const secondProduct: string = "Camo Fang Backpack Jungle";
const validPayment: Payment = new Payment();
const cartCount = 2;

/**
* Testcase 01: Check Cart items displayed correctly
*
* 1. Navigate to 'https://demo.gondolatest.com/'
* 2. Select "Women's" link on navigation bar.
* 3. Click 'Add to cart' button in 'Khaki Suede Polish Work Boots' and 'Camo Fang Backpack Jungle' product.
* 4. Select shopping cart.
* 5. Verify selected items displayed in cart page.
*/
TestCase("Testcase 01: Check Cart items displayed correctly", async () => {
    await HomePage.navigateTo();
    await HomePage.selectWomenTab();
    await ProductPage.addToCart(firstProduct);
    await ProductPage.addToCart(secondProduct, cartCount);
    await ProductPage.openShoppingCart();
    await CartPage.checkItemDisplayed(firstProduct);
    await CartPage.checkItemDisplayed(secondProduct);
});
/**
* Testcase 02: Check Payment button is enabled when user inputs valid information.
*
* 1. Navigate to 'https://demo.gondolatest.com/'
* 2. Verify that home page title displayed.
* 3. Select "Women's" link on navigation bar.
* 4. Click 'Add to cart' button in 'Khaki Suede Polish Work Boots' product and 'Camo Fang Backpack Jungle' product.
* 5. Select shopping cart.
* 6. Input VALID payment information.
* 7. Verify "PAY WITH CREDIT CARD" button is enabled.
*/
TestCase("Testcase 02: Check Payment button is enabled when user inputs valid information.", async () => {
    await HomePage.navigateTo();
    await HomePage.selectWomenTab();
    await ProductPage.addToCart(firstProduct);
    await ProductPage.addToCart(secondProduct, cartCount);
    await ProductPage.openShoppingCart();
    await CartPage.fillPaymentInfo(validPayment);
    await CartPage.checkPaymentButtonEnabled();
});
