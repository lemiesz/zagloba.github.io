var Zagloba = Zagloba || {};
Zagloba.index = (function (ko, $) {
    function app() {



       



        //--------------------- END OBJECT MODELS --------------------

        // Set `self` to the current scope
        var self = this;
        // BEGIN OBSERVABLES
        self.active = ko.observable("the year.");

        //----------Months of the Year--------

        self.Jan = ko.observable(true); //0 Jan.
        self.Feb = ko.observable(true); //1 Feb.
        self.Mar = ko.observable(true); //2 March
        self.Apr = ko.observable(true); //3 April
        self.May = ko.observable(true); //4 May
        self.Jun = ko.observable(true); //5 June
        self.Jul = ko.observable(true); //6 July
        self.Aug = ko.observable(true); //7 August
        self.Sept = ko.observable(true); //8 Sept.
        self.Oct = ko.observable(true); //9 Oct.
        self.Nov = ko.observable(true); //10 Nov.
        self.Dec = ko.observable(true); //11 Dec.




        self.clearMonths = function () {
            self.Jan(false); //0 Jan.
            self.Feb(false); //1 Feb.
            self.Mar(false); //2 March
            self.Apr(false); //3 April
            self.May(false); //4 May
            self.Jun(false); //5 June
            self.Jul(false); //6 July
            self.Aug(false); //7 August
            self.Sept(false); //8 Sept.
            self.Oct(false); //9 Oct.
            self.Nov(false); //10 Nov.
            self.Dec(false); //11 Dec.
        };

        self.filterByMonth = function (index) {
           
            self.clearMonths();
            switch (index) {
                case 0:
                    self.Jan(true);
                    self.active("January");
                    break;
                case 1:
                    self.Feb(true);
                    self.active("February");
                    break;
                case 2:
                    self.Mar(true);
                    self.active("March");
                    break;
                case 3:
                    self.Apr(true);
                    self.active("April");
                    break;
                case 4:
                    self.May(true);
                    self.active("May");
                    break;
                case 5:
                    self.Jun(true);
                    self.active("June");
                    break;
                case 6:
                    self.Jul(true);
                    self.active("July");
                    break;
                case 7:
                    self.Aug(true);
                    self.active("August");
                    break;
                case 8:
                    self.Sept(true);
                    self.active("September");
                    break;
                case 9:
                    self.Oct(true);
                    self.active("October");
                    break;
                case 10:
                    self.Nov(true);
                    self.active("November");
                    break;
                case 11:
                    self.Dec(true);
                    self.active("December");
                    break;
                default:
                    self.Jan(true);
                    self.Feb(true);
                    self.Mar(true);
                    self.Apr(true);
                    self.May(true);
                    self.Jun(true);
                    self.Jul(true);
                    self.Aug(true);
                    self.Sept(true);
                    self.Oct(true);
                    self.Nov(true);
                    self.Dec(true);
                    self.active("the year.");
                    break;
            }


            var $container = $('.blog-grid');
            $container.imagesLoaded(function () {
                $container.masonry({
                    itemSelector: '.post',
                    columnWidth: 250

                });
                $container.css('visibility', 'visible').parent().removeClass('loading');
            });

        };

       

        //----------------- END KNOCKOUT VIEW-MODEL ------------------
    }
    //----------------- BEGIN PUBLIC METHODS /initModule/-------------
    function initModule() {
        ko.applyBindings(new app());
    }
    return {
        initModule: initModule
    };
    //------------------- END PUBLIC METHODS -------------------------
})(ko, $);
