import {ProductResponse} from "../types/migros-product-response";
import {Product} from "../types/migros-product.type";

export function mapResponseToProduct(response: ProductResponse): Product {
    const nutrients = response.nutrition_facts?.standard ? response.nutrition_facts.standard.nutrients : undefined;
    let healthySugar = true;
    let healthySalt = true;
    if (nutrients) {
        const sugar = nutrients.find(nutrient => nutrient.name.toLowerCase().includes("zucker"));
        if (response.package.content / 100 * sugar.quantity > 25) {
            healthySugar = false;
        }
        const salt = nutrients.find(nutrient => nutrient.name.toLowerCase().includes("salz"));
        if (response.package.content / 100 * salt.quantity > 2.5) {
            healthySalt = false;
        }
    }
    return {
        id: response.id,
        healthySugar: healthySugar,
        healthySalt,
        name: response.name,
        description: response.description?.text,
        image: response.image.original,
        brand: response.brand.name,
        categories: response.categories.map((category) => {
            return {
                id: category.code,
                name: category.name,
            }
        }),
        ingredients: response.ingredients?.replace(/<\/?strong>/g, ''),
        allergenText: response.allergen_text,
        healthy: undefined, // TODO: how to calculate?
        nutrients: response.nutrition_facts?.standard.nutrients.map((nutrients) => {
            return {
                name: nutrients.name,
                quantity: nutrients.quantity,
                quantityUnit: nutrients.quantity_unit,
            }
        }),
        allergens: response.allergens !== undefined ? response.allergens?.map((allergen) => {
            return {
                code: allergen.code,
                name: allergen.name,
                contamination_code: allergen.contamination_code,
                contamination: allergen.contamination,
            }
        }) : [],
        price: response.price.item.price,
        origin: response.origins?.producing_country,
    }
}
