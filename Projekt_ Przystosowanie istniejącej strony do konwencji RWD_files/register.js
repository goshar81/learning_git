App.Views.Register=Backbone.View.extend({events:{'click input[name="terms"]':"changeTermsConfirmation","click [data-show-terms-details]":"showPersonalTermsDetails","click [type=submit]":"onSubmitForm"},initialize:function(){this.$termsConfirmedAtHidden=this.$('input[name="terms_confirmed_at"]'),this.$termsDetails=this.$("[data-terms-details]")},changeTermsConfirmation:function(a){$(a.currentTarget).is(":checked")?this.$termsConfirmedAtHidden.val(Math.floor(Date.now()/1e3)):this.$termsConfirmedAtHidden.val("")},showPersonalTermsDetails:function(a){$(a.currentTarget).remove(),this.$termsDetails.removeClass("display-none")},onSubmitForm:function(){this.$el.find('input[name="terms"]').is(":checked")?"dev"!==window.environment&&(dataLayer.push({event:"rejestracja"}),ga("send","event","rejestracja","wyslana")):analytics.track("auth_register_not_checked_terms")}});