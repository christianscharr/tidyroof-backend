export interface ProductResponse {
	variants?:                  ProductResponse[];
	views?:                     string[];
	slug:                       string;
	slugs:                      Slugs;
	receipt_text:               string;
	short_description:          string;
	regulated_description:      string;
	additional_descriptions:    Description[];
	status:                     Status;
	new_product:                NewProduct;
	variety:                    string;
	gtins:                      string[];
	m_check:                    MCheck[];
	price:                      Price;
	regional_information:       { [key: string]: RegionalInformation };
	regional_availability:      { [key: string]: RegionalAvailability };
	retailer:                   Retailer;
	retailer_flags:             RetailerFlags;
	links:                      Links;
	videos:                     string[];
	colors:                     Color[];
	purchasable_online:         boolean;
	galaxus_relevant:           boolean;
	ratings:                    Ratings;
	labels:                     Brand[];
	categories:                 Category[];
	m_data:                     MData;
	origins:                    Origins;
	distributor:                Distributor;
	ingredients:                string;
	allergen_text:              string;
	allergens:                  Allergen[];
	general_information:        GeneralInformation[];
	chemicals_declaration:      ChemicalsDeclaration;
	care_labels:                CareLabel[];
	is_variant:                 boolean;
	base_product_id:            string;
	main_variant_id:            string;
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
	id:                         string;
	language:                   string;
	name:                       string;
	product_name:               string;
	product_type:               string;
	vat:                        Vat;
	description:                Description;
	image:                      Image;
	image_transparent:          Image;
	additional_images:          Image[];
	documents:                  Document[];
	boss_number:                string;
	brand:                      Brand;
	features:                   Feature[];
	internal_features:          Feature[];
	updated_at:                 Date;
	online_shop_relevant:       boolean;
	services:                   Services;
	base_unit:                  string;
	tags:                       string[];
}

export interface Description {
	text:   string;
	source: string;
}

export interface Image {
	source:      string;
	code:        string;
	description: string;
	original:    string;
	custom:      string;
	small:       string;
	medium:      string;
	large:       string;
	hash:        string;
	tags:        string[];
	stack:       string;
}

export interface NutritionFacts {
	standard: Portion;
	portion:  Portion;
}

export interface Portion {
	base_description:               string;
	base_quantity:                  number;
	base_quantity_description:      string;
	base_precision:                 string;
	base_unit:                      string;
	package_type:                   string;
	portions_per_package:           string;
	portions_per_package_precision: string;
	serving_description:            string;
	serving_size_description:       string;
	consumption_hint:               string;
	preparation_state:              string;
	nutrients:                      Nutrient[];
}

export interface Nutrient {
	code:                    string;
	name:                    string;
	pictogram_name:          string;
	category:                string;
	quantity:                number;
	rda_percent:             number;
	rda_percent_operator:    string;
	nutrition_operator:      string;
	quantity_unit:           string;
	quantity_alternate:      number;
	quantity_alternate_unit: string;
}

export interface Allergen {
	code:               string;
	name:               string;
	contamination_code: string;
	contamination:      string;
}

export interface Attributes {
	additionalProp1: AttributesAdditionalProp1;
	additionalProp2: AttributesAdditionalProp1;
	additionalProp3: AttributesAdditionalProp1;
}

export interface AttributesAdditionalProp1 {
	name:      string;
	value:     string;
	hex_color: string;
	code:      string;
}

export interface Brand {
	id:          string;
	name:        string;
	slug:        string;
	title:       string;
	abstract:    string;
	keywords:    string[];
	headline:    string;
	description: string;
	image:       Image;
	links:       Links;
	tags:        string[];
}

export interface Links {
	additionalProp1: LinksAdditionalProp1;
	additionalProp2: LinksAdditionalProp1;
	additionalProp3: LinksAdditionalProp1;
}

export interface LinksAdditionalProp1 {
	url:         string;
	app_url:     string;
	mobile_url:  string;
	tablet_url:  string;
	name:        string;
	canonical:   string;
	type:        string;
	purchasable: boolean;
	image:       Image;
}

export interface CareLabel {
	id:    string;
	name:  string;
	image: Image;
}

export interface Category {
	code:        string;
	name:        string;
	slug:        string;
	slugs:       Slugs;
	title:       string;
	abstract:    string;
	keywords:    string[];
	headline:    string;
	parent_code: string;
	image:       Image;
	level:       number;
	visible:     boolean;
}

export interface Slugs {
	de: string;
	fr: string;
	it: string;
}

export interface ChemicalsDeclaration {
	declaration_number:                 string;
	product_id:                         string;
	release_date:                       Date;
	supplier_id:                        string;
	supplier_description:               string;
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
	cpid_number:                        string;
	biozid_number_ch:                   string;
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
	name:          string;
}

export interface SignalWord {
	code:  string;
	label: string;
}

export interface DeclarationRequiredIngredient {
	name:          string;
	cas_number:    string;
	einecs_number: string;
}

export interface Color {
	label:     string;
	hex:       string;
	group:     string;
	group_hex: string;
}

export interface Declarations {
	food: Food;
}

export interface Food {
	directions:                       string;
	label_aha:                        string;
	allergen_statement:               string;
	additives_declaration_obligatory: SignalWord;
	additives:                        Additive[];
	features:                         Feature[];
}

export interface Additive {
	code:              string;
	label:             string;
	containment_code:  string;
	containment_label: string;
}

export interface Feature {
	values:        Value[];
	pop_pictogram: boolean;
	pop_whitelist: boolean;
	pop_order:     number;
	pop_blacklist: boolean;
	label_code:    string;
	label:         string;
	top_fact:      boolean;
	unit_code:     string;
	unit:          string;
	unit_symbol:   string;
	category_code: string;
}

export interface Value {
	image:         Image;
	value:         string;
	value_code:    string;
	boolean_value: boolean;
	numeric_value: number;
}

export interface Distributor {
	name:    string;
	address: string;
}

export interface Document {
	label:    string;
	purposes: string[];
	url:      string;
	type:     string;
}

export interface EnergyEfficiency {
	efficiency_class: string;
	class:            Class;
	class_range:      Class;
	arrow:            Image;
	hex_color:        string;
	image:            Image;
}

export interface Class {
	text:      string;
	hex_color: string;
}

export interface Eyecatcher {
	code:          string;
	value_code:    string;
	label_code:    string;
	description:   string;
	image:         Image;
	pop_whitelist: boolean;
	pop_order:     number;
	pop_blacklist: boolean;
	pop_pictogram: boolean;
}

export interface GeneralInformation {
	label: string;
	value: string;
}

export interface MCheck {
	label:      string;
	label_code: string;
	value:      string;
	value_code: string;
	link:       string;
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
	producing_country:      string;
	production_facility_id: string;
	supplier_country:       string;
	origins_information:    string;
	country_of_origin:      string;
	material_country_code:  string;
	place_of_provenance:    string;
	place_of_birth:         string;
	place_of_rearing:       string;
	place_of_slaughter:     string;
	catch_areas:            string[];
}

export interface Package {
	content:                  number;
	content_unit_code:        string;
	content_unit:             string;
	net_weight:               number;
	net_weight_unit_code:     string;
	net_weight_unit:          string;
	type:                     string;
	portions_per_package:     string;
	precision:                string;
	brutto_weight:            number;
	brutto_weight_unit_code:  string;
	brutto_volume:            number;
	brutto_volume_unit_code:  string;
	height:                   number;
	length:                   number;
	width:                    number;
	unit_dimension:           string;
	price_comparison_content: number;
	size:                     string;
}

export interface PackageInformation {
	additionalProp1: PackageInformationAdditionalProp1;
	additionalProp2: PackageInformationAdditionalProp1;
	additionalProp3: PackageInformationAdditionalProp1;
}

export interface PackageInformationAdditionalProp1 {
	brutto_weight:           number;
	brutto_weight_unit_code: string;
	brutto_volume:           number;
	brutto_volume_unit_code: string;
	height:                  number;
	length:                  number;
	width:                   number;
	dimension_unit_code:     string;
	number_of_base_units:    number;
}

export interface Pop {
	approval:  boolean;
	templates: Template[];
	images:    Image[];
}

export interface Template {
	code:                          string;
	language:                      string;
	catalog:                       string;
	print_only_whitelist_features: boolean;
}

export interface Price {
	base?:                           Base;
	discount?:                       Discount;
	discount_hint?:                  string;
	estimated_piece_original_price?: number;
	valid_from:                      Date;
	valid_to:                        Date;
	currency:                        string;
	source:                          string;
	no_price_hint:                   string;
	item:                            Base;
	estimated_piece_weight:          number;
	estimated_piece_price:           number;
}

export interface Base {
	price:            number;
	original_price:   number;
	quantity:         number;
	unit:             string;
	varying_quantity: boolean;
	display_quantity: string;
}

export interface Discount {
	id:                     string;
	cms_id:                 string;
	channel:                string;
	region:                 string;
	year:                   number;
	start_date:             Date;
	end_date:               Date;
	calendar_week:          string;
	duration:               string;
	duration_days:          number;
	discount_type:          string;
	location_planning_type: string;
	discount_type_id:       string;
	reduction_type_id:      string;
	discount_type_label:    string;
	special_advertisement:  boolean;
	advertisement_type_id:  string;
	discount_regions:       string[];
	reference_product_id:   string;
	organisation:           string;
	cooperative:            string;
	description:            string;
	discount_hint:          string;
	fantastic_price:        boolean;
	high_performer:         boolean;
	collective_discount:    boolean;
	selling_unit:           string;
	discount_amount:        string;
	savings:                string;
	instead_of:             string;
	price:                  number;
	original_price:         number;
	profit:                 number;
	disclaimer:             string;
	image:                  Image;
	image_transparent:      Image;
	secondary_image:        Image;
	additional_images:      Image[];
	logo:                   Image;
	secondary_logo:         Image;
	newsletter_image:       string;
	badge:                  Badge;
	source:                 string;
	boss_number:            string;
	publication_date:       Date;
	discount_role_id:       string;
	discount_role_label:    string;
	visibility:             string;
	last_imported:          Date;
	last_mapped:            Date;
	campaign_ids:           string[];
	tags:                   string[];
}

export interface Badge {
	original:      string;
	stack:         string;
	custom:        string;
	hdpi_detail:   string;
	hdpi_list:     string;
	hdpi_slider:   string;
	ios_detail:    string;
	ios_list:      string;
	ios_slider:    string;
	ios2x_detail:  string;
	ios2x_list:    string;
	ios2x_slider:  string;
	mdpi_detail:   string;
	mdpi_list:     string;
	mdpi_slider:   string;
	xhdpi_detail:  string;
	xhdpi_list:    string;
	xhdpi_slider:  string;
	xxhdpi_detail: string;
	xxhdpi_list:   string;
	xxhdpi_slider: string;
	ios_slider2x:  string;
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
	product_ids: string[];
	name:        string;
}

export interface Retailer {
	id:   string;
	name: string;
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
	exclude_cross_channel: string[];
}

export interface Services {
	logistics: Logistic[];
	others:    Logistic[];
}

export interface Logistic {
	code:      string;
	min:       number;
	max:       number;
	mandatory: boolean;
}

export interface Status {
	id:                 string;
	seasonal:           boolean;
	active:             NewProduct;
	seasonal_type_code: string;
	selling_start_date: Date;
	pim_status:         string;
	description:        string;
}

export interface UtzDeclaration {
	lot_number: string;
	members:    string[];
	url:        string;
}

export interface Vat {
	id:         number;
	percentage: number;
}
