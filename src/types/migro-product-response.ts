export interface Product {
	variants?:                  Product[];
	views?:                     AllergenText[];
	slug:                       AllergenText;
	slugs:                      Slugs;
	receipt_text:               AllergenText;
	short_description:          AllergenText;
	regulated_description:      AllergenText;
	additional_descriptions:    Description[];
	status:                     Status;
	new_product:                NewProduct;
	variety:                    AllergenText;
	gtins:                      AllergenText[];
	m_check:                    MCheck[];
	price:                      Price;
	regional_information:       { [key: string]: RegionalInformation };
	regional_availability:      { [key: string]: RegionalAvailability };
	retailer:                   Retailer;
	retailer_flags:             RetailerFlags;
	links:                      Links;
	videos:                     AllergenText[];
	colors:                     Color[];
	purchasable_online:         boolean;
	galaxus_relevant:           boolean;
	ratings:                    Ratings;
	labels:                     Brand[];
	categories:                 Category[];
	m_data:                     MData;
	origins:                    Origins;
	distributor:                Distributor;
	ingredients:                AllergenText;
	allergen_text:              AllergenText;
	allergens:                  Allergen[];
	general_information:        GeneralInformation[];
	chemicals_declaration:      ChemicalsDeclaration;
	care_labels:                CareLabel[];
	is_variant:                 boolean;
	base_product_id:            AllergenText;
	main_variant_id:            AllergenText;
	package:                    Package;
	package_information:        PackageInformation;
	attributes:                 Attributes;
	utz_declarations:           UtzDeclaration[];
	related_products:           RelatedProducts;
	pictograms:                 Eyecatcher[];
	eyecatchers:                Eyecatcher[];
	energy_efficiency:          EnergyEfficiency;
	warranty_months:            number;
	quantity_on_stock:          number;
	pop:                        Pop;
	nutrition_facts:            NutritionFacts;
	additional_nutrition_facts: NutritionFacts;
	declarations:               Declarations;
	reindex_date:               Date;
	warranty_extension_price:   number;
	included_recycling_fee:     number;
	id:                         AllergenText;
	language:                   AllergenText;
	name:                       AllergenText;
	product_name:               AllergenText;
	product_type:               AllergenText;
	vat:                        Vat;
	description:                Description;
	image:                      Image;
	image_transparent:          Image;
	additional_images:          Image[];
	documents:                  Document[];
	boss_number:                AllergenText;
	brand:                      Brand;
	features:                   Feature[];
	internal_features:          Feature[];
	updated_at:                 Date;
	online_shop_relevant:       boolean;
	services:                   Services;
	base_unit:                  AllergenText;
	tags:                       AllergenText[];
}

export interface Description {
	text:   AllergenText;
	source: AllergenText;
}

export enum AllergenText {
	String = "string",
}

export interface Image {
	source:      AllergenText;
	code:        AllergenText;
	description: AllergenText;
	original:    AllergenText;
	custom:      AllergenText;
	small:       AllergenText;
	medium:      AllergenText;
	large:       AllergenText;
	hash:        AllergenText;
	tags:        AllergenText[];
	stack:       AllergenText;
}

export interface NutritionFacts {
	standard: Portion;
	portion:  Portion;
}

export interface Portion {
	base_description:               AllergenText;
	base_quantity:                  number;
	base_quantity_description:      AllergenText;
	base_precision:                 AllergenText;
	base_unit:                      AllergenText;
	package_type:                   AllergenText;
	portions_per_package:           AllergenText;
	portions_per_package_precision: AllergenText;
	serving_description:            AllergenText;
	serving_size_description:       AllergenText;
	consumption_hint:               AllergenText;
	preparation_state:              AllergenText;
	nutrients:                      Nutrient[];
}

export interface Nutrient {
	code:                    AllergenText;
	name:                    AllergenText;
	pictogram_name:          AllergenText;
	category:                AllergenText;
	quantity:                number;
	rda_percent:             number;
	rda_percent_operator:    AllergenText;
	nutrition_operator:      AllergenText;
	quantity_unit:           AllergenText;
	quantity_alternate:      number;
	quantity_alternate_unit: AllergenText;
}

export interface Allergen {
	code:               AllergenText;
	name:               AllergenText;
	contamination_code: AllergenText;
	contamination:      AllergenText;
}

export interface Attributes {
	additionalProp1: AttributesAdditionalProp1;
	additionalProp2: AttributesAdditionalProp1;
	additionalProp3: AttributesAdditionalProp1;
}

export interface AttributesAdditionalProp1 {
	name:      AllergenText;
	value:     AllergenText;
	hex_color: AllergenText;
	code:      AllergenText;
}

export interface Brand {
	id:          AllergenText;
	name:        AllergenText;
	slug:        AllergenText;
	title:       AllergenText;
	abstract:    AllergenText;
	keywords:    AllergenText[];
	headline:    AllergenText;
	description: AllergenText;
	image:       Image;
	links:       Links;
	tags:        AllergenText[];
}

export interface Links {
	additionalProp1: LinksAdditionalProp1;
	additionalProp2: LinksAdditionalProp1;
	additionalProp3: LinksAdditionalProp1;
}

export interface LinksAdditionalProp1 {
	url:         AllergenText;
	app_url:     AllergenText;
	mobile_url:  AllergenText;
	tablet_url:  AllergenText;
	name:        AllergenText;
	canonical:   AllergenText;
	type:        AllergenText;
	purchasable: boolean;
	image:       Image;
}

export interface CareLabel {
	id:    AllergenText;
	name:  AllergenText;
	image: Image;
}

export interface Category {
	code:        AllergenText;
	name:        AllergenText;
	slug:        AllergenText;
	slugs:       Slugs;
	title:       AllergenText;
	abstract:    AllergenText;
	keywords:    AllergenText[];
	headline:    AllergenText;
	parent_code: AllergenText;
	image:       Image;
	level:       number;
	visible:     boolean;
}

export interface Slugs {
	de: AllergenText;
	fr: AllergenText;
	it: AllergenText;
}

export interface ChemicalsDeclaration {
	declaration_number:                 AllergenText;
	product_id:                         AllergenText;
	release_date:                       Date;
	supplier_id:                        AllergenText;
	supplier_description:               AllergenText;
	hazard_statements:                  SignalWord[];
	precautionary_statements:           SignalWord[];
	eu_hazard_statements:               SignalWord[];
	risk_statements:                    SignalWord[];
	safety_statements:                  SignalWord[];
	storage_class:                      SignalWord;
	preservability_months:              number;
	tunnel_restriction:                 SignalWord;
	transport_category:                 SignalWord;
	extra_hazard_statements:            SignalWord[];
	hazard_classes:                     SignalWord[];
	un_number:                          SignalWord;
	signal_word:                        SignalWord;
	cpid_number:                        AllergenText;
	biozid_number_ch:                   AllergenText;
	chem_voc_concentration:             number;
	poison_cabinet:                     boolean;
	packaging_exceeds_limited_quantity: boolean;
	chemical_quantity_limit:            number;
	hazard_pictograms:                  Image[];
	hazard_symbols:                     Image[];
	cleaning_agents:                    CleaningAgent[];
	extra_cleaning_agents:              CleaningAgent[];
	declaration_required_ingredients:   DeclarationRequiredIngredient[];
	updated_at:                         Date;
}

export interface CleaningAgent {
	concentration: SignalWord;
	group:         SignalWord;
	name:          AllergenText;
}

export interface SignalWord {
	code:  AllergenText;
	label: AllergenText;
}

export interface DeclarationRequiredIngredient {
	name:          AllergenText;
	cas_number:    AllergenText;
	einecs_number: AllergenText;
}

export interface Color {
	label:     AllergenText;
	hex:       AllergenText;
	group:     AllergenText;
	group_hex: AllergenText;
}

export interface Declarations {
	food: Food;
}

export interface Food {
	directions:                       AllergenText;
	label_aha:                        AllergenText;
	allergen_statement:               AllergenText;
	additives_declaration_obligatory: SignalWord;
	additives:                        Additive[];
	features:                         Feature[];
}

export interface Additive {
	code:              AllergenText;
	label:             AllergenText;
	containment_code:  AllergenText;
	containment_label: AllergenText;
}

export interface Feature {
	values:        Value[];
	pop_pictogram: boolean;
	pop_whitelist: boolean;
	pop_order:     number;
	pop_blacklist: boolean;
	label_code:    AllergenText;
	label:         AllergenText;
	top_fact:      boolean;
	unit_code:     AllergenText;
	unit:          AllergenText;
	unit_symbol:   AllergenText;
	category_code: AllergenText;
}

export interface Value {
	image:         Image;
	value:         AllergenText;
	value_code:    AllergenText;
	boolean_value: boolean;
	numeric_value: number;
}

export interface Distributor {
	name:    AllergenText;
	address: AllergenText;
}

export interface Document {
	label:    AllergenText;
	purposes: AllergenText[];
	url:      AllergenText;
	type:     AllergenText;
}

export interface EnergyEfficiency {
	efficiency_class: AllergenText;
	class:            Class;
	class_range:      Class;
	arrow:            Image;
	hex_color:        AllergenText;
	image:            Image;
}

export interface Class {
	text:      AllergenText;
	hex_color: AllergenText;
}

export interface Eyecatcher {
	code:          AllergenText;
	value_code:    AllergenText;
	label_code:    AllergenText;
	description:   AllergenText;
	image:         Image;
	pop_whitelist: boolean;
	pop_order:     number;
	pop_blacklist: boolean;
	pop_pictogram: boolean;
}

export interface GeneralInformation {
	label: AllergenText;
	value: AllergenText;
}

export interface MCheck {
	label:      AllergenText;
	label_code: AllergenText;
	value:      AllergenText;
	value_code: AllergenText;
	link:       AllergenText;
	image:      Image;
}

export interface MData {
	production_days:          number;
	distribution_center_days: number;
	region_days:              number;
	consumption_days:         number;
	total_durability_days:    number;
}

export interface NewProduct {
	from: Date;
	to:   Date;
}

export interface Origins {
	producing_country:      AllergenText;
	production_facility_id: AllergenText;
	supplier_country:       AllergenText;
	origins_information:    AllergenText;
	country_of_origin:      AllergenText;
	material_country_code:  AllergenText;
	place_of_provenance:    AllergenText;
	place_of_birth:         AllergenText;
	place_of_rearing:       AllergenText;
	place_of_slaughter:     AllergenText;
	catch_areas:            AllergenText[];
}

export interface Package {
	content:                  number;
	content_unit_code:        AllergenText;
	content_unit:             AllergenText;
	net_weight:               number;
	net_weight_unit_code:     AllergenText;
	net_weight_unit:          AllergenText;
	type:                     AllergenText;
	portions_per_package:     AllergenText;
	precision:                AllergenText;
	brutto_weight:            number;
	brutto_weight_unit_code:  AllergenText;
	brutto_volume:            number;
	brutto_volume_unit_code:  AllergenText;
	height:                   number;
	length:                   number;
	width:                    number;
	unit_dimension:           AllergenText;
	price_comparison_content: number;
	size:                     AllergenText;
}

export interface PackageInformation {
	additionalProp1: PackageInformationAdditionalProp1;
	additionalProp2: PackageInformationAdditionalProp1;
	additionalProp3: PackageInformationAdditionalProp1;
}

export interface PackageInformationAdditionalProp1 {
	brutto_weight:           number;
	brutto_weight_unit_code: AllergenText;
	brutto_volume:           number;
	brutto_volume_unit_code: AllergenText;
	height:                  number;
	length:                  number;
	width:                   number;
	dimension_unit_code:     AllergenText;
	number_of_base_units:    number;
}

export interface Pop {
	approval:  boolean;
	templates: Template[];
	images:    Image[];
}

export interface Template {
	code:                          AllergenText;
	language:                      AllergenText;
	catalog:                       AllergenText;
	print_only_whitelist_features: boolean;
}

export interface Price {
	base?:                           Base;
	discount?:                       Discount;
	discount_hint?:                  AllergenText;
	estimated_piece_original_price?: number;
	valid_from:                      Date;
	valid_to:                        Date;
	currency:                        AllergenText;
	source:                          AllergenText;
	no_price_hint:                   AllergenText;
	item:                            Base;
	estimated_piece_weight:          number;
	estimated_piece_price:           number;
}

export interface Base {
	price:            number;
	original_price:   number;
	quantity:         number;
	unit:             AllergenText;
	varying_quantity: boolean;
	display_quantity: AllergenText;
}

export interface Discount {
	id:                     AllergenText;
	cms_id:                 AllergenText;
	channel:                AllergenText;
	region:                 AllergenText;
	year:                   number;
	start_date:             Date;
	end_date:               Date;
	calendar_week:          AllergenText;
	duration:               AllergenText;
	duration_days:          number;
	discount_type:          AllergenText;
	location_planning_type: AllergenText;
	discount_type_id:       AllergenText;
	reduction_type_id:      AllergenText;
	discount_type_label:    AllergenText;
	special_advertisement:  boolean;
	advertisement_type_id:  AllergenText;
	discount_regions:       AllergenText[];
	reference_product_id:   AllergenText;
	organisation:           AllergenText;
	cooperative:            AllergenText;
	description:            AllergenText;
	discount_hint:          AllergenText;
	fantastic_price:        boolean;
	high_performer:         boolean;
	collective_discount:    boolean;
	selling_unit:           AllergenText;
	discount_amount:        AllergenText;
	savings:                AllergenText;
	instead_of:             AllergenText;
	price:                  number;
	original_price:         number;
	profit:                 number;
	disclaimer:             AllergenText;
	image:                  Image;
	image_transparent:      Image;
	secondary_image:        Image;
	additional_images:      Image[];
	logo:                   Image;
	secondary_logo:         Image;
	newsletter_image:       AllergenText;
	badge:                  Badge;
	source:                 AllergenText;
	boss_number:            AllergenText;
	publication_date:       Date;
	discount_role_id:       AllergenText;
	discount_role_label:    AllergenText;
	visibility:             AllergenText;
	last_imported:          Date;
	last_mapped:            Date;
	campaign_ids:           AllergenText[];
	tags:                   AllergenText[];
}

export interface Badge {
	original:      AllergenText;
	stack:         AllergenText;
	custom:        AllergenText;
	hdpi_detail:   AllergenText;
	hdpi_list:     AllergenText;
	hdpi_slider:   AllergenText;
	ios_detail:    AllergenText;
	ios_list:      AllergenText;
	ios_slider:    AllergenText;
	ios2x_detail:  AllergenText;
	ios2x_list:    AllergenText;
	ios2x_slider:  AllergenText;
	mdpi_detail:   AllergenText;
	mdpi_list:     AllergenText;
	mdpi_slider:   AllergenText;
	xhdpi_detail:  AllergenText;
	xhdpi_list:    AllergenText;
	xhdpi_slider:  AllergenText;
	xxhdpi_detail: AllergenText;
	xxhdpi_list:   AllergenText;
	xxhdpi_slider: AllergenText;
	ios_slider2x:  AllergenText;
}

export interface Ratings {
	count_all:   number;
	average_all: number;
}

export interface RegionalAvailability {
	available:   boolean;
	probability: number;
}

export interface RegionalInformation {
	prices:             Price[];
	discounted_prices:  Price[];
	se_original_prices: Price[];
	price_sort:         number;
	price_boost:        number;
}

export interface RelatedProducts {
	purchase_recommendations:  PurchaseRecommendations;
	reference_recommendations: PurchaseRecommendations;
	reference_program:         PurchaseRecommendations;
	spare_parts:               PurchaseRecommendations;
}

export interface PurchaseRecommendations {
	product_ids: AllergenText[];
	name:        AllergenText;
}

export interface Retailer {
	id:   AllergenText;
	name: AllergenText;
}

export interface RetailerFlags {
	bikeworld:    Bikeworld;
	doitgarden:   Bikeworld;
	interio:      Bikeworld;
	melectronics: Bikeworld;
	micasa:       Bikeworld;
	migros_ch:    Bikeworld;
	sportxx:      Bikeworld;
}

export interface Bikeworld {
	orderable:             boolean;
	reservable:            boolean;
	stock_request:         boolean;
	visible:               boolean;
	exclude_cross_channel: AllergenText[];
}

export interface Services {
	logistics: Logistic[];
	others:    Logistic[];
}

export interface Logistic {
	code:      AllergenText;
	min:       number;
	max:       number;
	mandatory: boolean;
}

export interface Status {
	id:                 AllergenText;
	seasonal:           boolean;
	active:             NewProduct;
	seasonal_type_code: string;
	selling_start_date: Date;
	pim_status:         AllergenText;
	description:        AllergenText;
}

export interface UtzDeclaration {
	lot_number: AllergenText;
	members:    AllergenText[];
	url:        AllergenText;
}

export interface Vat {
	id:         number;
	percentage: number;
}
