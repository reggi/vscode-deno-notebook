// meow_test
import { meow } from './meow.ts'
import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";

Deno.test("meow", () => {
  assertEquals(meow(), 'meow');
});