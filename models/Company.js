
var mongoose = require('mongoose');
require('mongoose-type-html');

var Schema = mongoose.Schema;
var companiesSchema = new Schema({
  name: String,
  permalink: String,
  crunchbase_url: String,
  homepage_url: String,
  blog_url: String,
  blog_feed: String,
  twitter_username: String,
  category_code: String,
  number_of_employee: Number,
  founded_year: Number,
  founded_month: Number,
  founded_day: Number,
  deadpooled_year: Number,
  deadpooled_month: Number,
  deadpooled_day: Number,
  deadpooled_url: String,
  tag_list: String,
  alias_list: String,
  email_address: String,
  phone_number: String,
  description: String,
  created_at: String,
  updated_at: String,
  overview: mongoose.SchemaTypes.Html,
  product:[{
        name:String,
        permalink:String
  }],
  relationship: [{
      is_past: Boolean,
      title:String,
      person : {
          first_name: String,
          last_name:String,
          permalink:String
      }
  }],
  competitions:[{
      competitor:{
          name:String,
          permalink:String
      }
  }],
  providerships:[{
      title: String,
      is_past:Boolean,
      provider: {
          name: String,
          permalink: String
      }
  }],
  total_money_raised: String,
  funding_rounds:[{
      id: Number,
      round_code: String,
      source_url: String,
      source_description: String,
      raised_amount: Number,
      raised_currency_code: String,
      funded_year: Number,
      funded_month:Number,
      funded_day: Number,
      investments:[{
          company: String,
          finantial_org:{
              name:String,
              permalink:String
          },
          person:{
                first_name:String,
                last_name:String,
                permalink:String
          }
      }]
  }],
  investments:[{
      funding_round:{
        round_code:String,
        source_url:String,
        source_description:String,
        raised_amount:Number,
        raised_currency_code:String,
        funded_year:Number,
        funded_month:Number,
        funded_day:Number,
        company:{
            name:String,
            permalink:String
        }
      }
  }],
  
  acquisition:{
      price_amount: Number,
      price_currency_code: String,
      term_code: String,
      source_url:String,
      source_description:String,
      acquired_year: Number,
      acquired_month: Number,
      acquired_day: Number,
      acquiring_company: {
          name:String,
          permalink:String
      }
  },
  acquisitions:[{
      price_amount:Number,
      price_currency_code:String,
      term_code:String,
      source_url:String,
      source_description:String,
      acquired_year: Number,
      acquired_month:Number,
      acquired_day:Number,
      company:{
        name:String,
        permalink:String
      }
  }],
  
  offices:[{
      description:String,
      address1:String,
      address2:String,
      zip_code:String,
      city:String,
      state_code:String,
      country_code:String,
      coord:{
          coordinates: [Number],
          type: String
      }
  }],

  milestone:[{
      id:Number,
      description: String,
      stoned_year:Number,
      stoned_month:Number,
      stoned_day:Number,
      source_url:String,
      source_text:String,
      stoneable_type:String,
      stoned_value:Number,
      stoned_value_type:String,
      stoned_acquirer: String,
      stoneable:{
          name:String,
          permalink:String
      }
  }],

  ipo:{
      valuation_amount:{
          $numberLong : Number  
      },
      valuation_currency_code: String,
      pub_year: Number,
      pub_month:Number,
      pub_day:Number,
      stock_symbol:String
  },

  video_embeds:[{
        embed_code:String,
        description:String
  }],
  external_links:[{
      external_url:String,
      title:String
  }],
  partners:[{
      partner_name:String,
      homepage_url:String,
      link_1_url:String,
      link_2_url:String,
      link_3_url:String,
      link_1_name:String,
      link_2_name:String,
      link_3_name:String
      }]
});
module.exports = mongoose.model('Company', companiesSchema);

